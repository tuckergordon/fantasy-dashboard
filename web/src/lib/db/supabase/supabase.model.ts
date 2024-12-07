export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      leagues: {
        Row: {
          id: number;
          name: string;
          year: number;
        };
        Insert: {
          id?: number;
          name: string;
          year: number;
        };
        Update: {
          id?: number;
          name?: string;
          year?: number;
        };
        Relationships: [];
      };
      matchups: {
        Row: {
          id: number;
          league_id: number | null;
          opponent_id: number | null;
          opponent_points: number | null;
          team_id: number | null;
          team_points: number | null;
          week: number | null;
        };
        Insert: {
          id?: never;
          league_id?: number | null;
          opponent_id?: number | null;
          opponent_points?: number | null;
          team_id?: number | null;
          team_points?: number | null;
          week?: number | null;
        };
        Update: {
          id?: never;
          league_id?: number | null;
          opponent_id?: number | null;
          opponent_points?: number | null;
          team_id?: number | null;
          team_points?: number | null;
          week?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'matchups_league_id_fkey';
            columns: ['league_id'];
            isOneToOne: false;
            referencedRelation: 'leagues';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'matchups_opponent_id_fkey';
            columns: ['opponent_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'matchups_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      player_points: {
        Row: {
          id: number;
          league_id: number | null;
          player_id: number | null;
          points: number | null;
          starter: number | null;
          team_id: number | null;
          week: number | null;
        };
        Insert: {
          id?: never;
          league_id?: number | null;
          player_id?: number | null;
          points?: number | null;
          starter?: number | null;
          team_id?: number | null;
          week?: number | null;
        };
        Update: {
          id?: never;
          league_id?: number | null;
          player_id?: number | null;
          points?: number | null;
          starter?: number | null;
          team_id?: number | null;
          week?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'player_points_league_id_fkey';
            columns: ['league_id'];
            isOneToOne: false;
            referencedRelation: 'leagues';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'player_points_player_id_fkey';
            columns: ['player_id'];
            isOneToOne: false;
            referencedRelation: 'players';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'player_points_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      players: {
        Row: {
          id: number;
          name: string;
          position: string;
        };
        Insert: {
          id?: number;
          name: string;
          position: string;
        };
        Update: {
          id?: number;
          name?: string;
          position?: string;
        };
        Relationships: [];
      };
      roster_assignments: {
        Row: {
          player_id: number;
          team_id: number;
        };
        Insert: {
          player_id: number;
          team_id: number;
        };
        Update: {
          player_id?: number;
          team_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'roster_assignments_player_id_fkey';
            columns: ['player_id'];
            isOneToOne: false;
            referencedRelation: 'players';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'roster_assignments_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      schedule: {
        Row: {
          id: number;
          league_id: number | null;
          max_points_for: number | null;
          points_against: number | null;
          points_for: number | null;
          team_id: number | null;
          week: number | null;
          win_h2h: number | null;
          win_median: number | null;
        };
        Insert: {
          id?: never;
          league_id?: number | null;
          max_points_for?: number | null;
          points_against?: number | null;
          points_for?: number | null;
          team_id?: number | null;
          week?: number | null;
          win_h2h?: number | null;
          win_median?: number | null;
        };
        Update: {
          id?: never;
          league_id?: number | null;
          max_points_for?: number | null;
          points_against?: number | null;
          points_for?: number | null;
          team_id?: number | null;
          week?: number | null;
          win_h2h?: number | null;
          win_median?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'schedule_league_id_fkey';
            columns: ['league_id'];
            isOneToOne: false;
            referencedRelation: 'leagues';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'schedule_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      teams: {
        Row: {
          id: number;
          league_id: number | null;
          name: string | null;
          roster_id: number | null;
          user_id: number | null;
        };
        Insert: {
          id?: never;
          league_id?: number | null;
          name?: string | null;
          roster_id?: number | null;
          user_id?: number | null;
        };
        Update: {
          id?: never;
          league_id?: number | null;
          name?: string | null;
          roster_id?: number | null;
          user_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'teams_league_id_fkey';
            columns: ['league_id'];
            isOneToOne: false;
            referencedRelation: 'leagues';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'teams_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
