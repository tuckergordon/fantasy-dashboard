import pandas as pd
import sqlite3

def points_for(con,week_until):
    # TODO: add functions for actual league and week selection
    # TODO: remove con as a necessary parameter

    df = pd.read_sql('select teams.name as team_name,players.name as player_name,players.position,week,points,starter from player_points \
             join players on players.id=player_points.player_id \
             join teams on player_points.roster_id=teams.roster_id and player_points.league_id=teams.league_id \
             and starter=1 and week<=?\
             order by starter desc',con,params=[week_until])
    
    pf = df.groupby('team_name').sum('points').sort_values('points',ascending=False)['points']

    return pf

def max_points_for(con,team_name,week):
    # TODO: add functions for actual league and week selection
    # TODO: remove con as a necessary parameter

    team_points = pd.read_sql('select teams.name as team_name,players.name as player_name,players.position,week,points,starter from player_points \
                           join players on players.id=player_points.player_id \
                           join teams on player_points.roster_id=teams.roster_id and player_points.league_id=teams.league_id \
                           where teams.name=? and week=? \
                           order by starter desc',con,params=[team_name,week])
    
    positions = ['QB','RB','RB','WR','WR','WR','TE']
    players = []

    max_pf = 0

    # fill basic positions
    for pos in positions:
        sorted_points = team_points.query(f'position == "{pos}"').sort_values('points',ascending=False)
        for i,r in sorted_points.iterrows():
            if r['player_name'] in players:
                continue
            max_pf += r['points']
            players.append(r['player_name'])
            break

    # fill flex spot
    sorted_points = team_points.query(f'position != "QB"').sort_values('points',ascending=False)
    for i,r in sorted_points.iterrows():
        if r['player_name'] in players:
            continue
        max_pf += r['points']
        players.append(r['player_name'])
        break

    # fill flex spot
    sorted_points = team_points.sort_values('points',ascending=False)
    for i,r in sorted_points.iterrows():
        if r['player_name'] in players:
            continue
        max_pf += r['points']
        players.append(r['player_name'])
        break

    return max_pf


def get_schedule(week_until, to_json=True):
    con = sqlite3.connect('./fantasy_dashboard.db')

    mpf = []

    ms = pd.read_sql('select t1.name,t2.name as opponent_name,team_points,opponent_points, week from matchups \
                    join teams as t1 on matchups.team_id=t1.roster_id and t1.league_id=matchups.league_id \
                    join teams as t2 on matchups.opponent_id=t2.roster_id and t2.league_id=matchups.league_id \
                    and week<=?',con,params=[week_until])

    df = ms.groupby('name').sum('opponent_points')

    for n in df.index:
        # print(n)
        
        p = 0

        for week in range(1,week_until+1):
            p+=max_points_for(con,n,week)
        
        mpf.append(p)

    df.insert(1,'max_pf',mpf)

    df = df[['team_points','opponent_points','max_pf']]
    df = df.rename(columns={'team_points':'pf','opponent_points':'pa'})

    con.close()
    
    if to_json:
        return df.to_json()
    else:
        return df

