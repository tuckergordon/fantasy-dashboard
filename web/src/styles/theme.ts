import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const mmishTheme: CustomThemeConfig = {
  name: 'mmish-theme',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `system-ui`,
    '--theme-font-family-heading': `system-ui`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '9999px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '0 0 0',
    '--on-secondary': '0 0 0',
    '--on-tertiary': '255 255 255',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '0 0 0',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #15e0e2
    '--color-primary-50': '220 250 251', // #dcfafb
    '--color-primary-100': '208 249 249', // #d0f9f9
    '--color-primary-200': '197 247 248', // #c5f7f8
    '--color-primary-300': '161 243 243', // #a1f3f3
    '--color-primary-400': '91 233 235', // #5be9eb
    '--color-primary-500': '21 224 226', // #15e0e2
    '--color-primary-600': '19 202 203', // #13cacb
    '--color-primary-700': '16 168 170', // #10a8aa
    '--color-primary-800': '13 134 136', // #0d8688
    '--color-primary-900': '10 110 111', // #0a6e6f
    // secondary | #fd655f
    '--color-secondary-50': '255 232 231', // #ffe8e7
    '--color-secondary-100': '255 224 223', // #ffe0df
    '--color-secondary-200': '255 217 215', // #ffd9d7
    '--color-secondary-300': '254 193 191', // #fec1bf
    '--color-secondary-400': '254 147 143', // #fe938f
    '--color-secondary-500': '253 101 95', // #fd655f
    '--color-secondary-600': '228 91 86', // #e45b56
    '--color-secondary-700': '190 76 71', // #be4c47
    '--color-secondary-800': '152 61 57', // #983d39
    '--color-secondary-900': '124 49 47', // #7c312f
    // tertiary | #6c4eed
    '--color-tertiary-50': '233 228 252', // #e9e4fc
    '--color-tertiary-100': '226 220 251', // #e2dcfb
    '--color-tertiary-200': '218 211 251', // #dad3fb
    '--color-tertiary-300': '196 184 248', // #c4b8f8
    '--color-tertiary-400': '152 131 242', // #9883f2
    '--color-tertiary-500': '108 78 237', // #6c4eed
    '--color-tertiary-600': '97 70 213', // #6146d5
    '--color-tertiary-700': '81 59 178', // #513bb2
    '--color-tertiary-800': '65 47 142', // #412f8e
    '--color-tertiary-900': '53 38 116', // #352674
    // success | #5ce015
    '--color-success-50': '231 250 220', // #e7fadc
    '--color-success-100': '222 249 208', // #def9d0
    '--color-success-200': '214 247 197', // #d6f7c5
    '--color-success-300': '190 243 161', // #bef3a1
    '--color-success-400': '141 233 91', // #8de95b
    '--color-success-500': '92 224 21', // #5ce015
    '--color-success-600': '83 202 19', // #53ca13
    '--color-success-700': '69 168 16', // #45a810
    '--color-success-800': '55 134 13', // #37860d
    '--color-success-900': '45 110 10', // #2d6e0a
    // warning | #f9803e
    '--color-warning-50': '254 236 226', // #feece2
    '--color-warning-100': '254 230 216', // #fee6d8
    '--color-warning-200': '254 223 207', // #fedfcf
    '--color-warning-300': '253 204 178', // #fdccb2
    '--color-warning-400': '251 166 120', // #fba678
    '--color-warning-500': '249 128 62', // #f9803e
    '--color-warning-600': '224 115 56', // #e07338
    '--color-warning-700': '187 96 47', // #bb602f
    '--color-warning-800': '149 77 37', // #954d25
    '--color-warning-900': '122 63 30', // #7a3f1e
    // error | #f93e3e
    '--color-error-50': '254 226 226', // #fee2e2
    '--color-error-100': '254 216 216', // #fed8d8
    '--color-error-200': '254 207 207', // #fecfcf
    '--color-error-300': '253 178 178', // #fdb2b2
    '--color-error-400': '251 120 120', // #fb7878
    '--color-error-500': '249 62 62', // #f93e3e
    '--color-error-600': '224 56 56', // #e03838
    '--color-error-700': '187 47 47', // #bb2f2f
    '--color-error-800': '149 37 37', // #952525
    '--color-error-900': '122 30 30', // #7a1e1e
    // surface | #271e45
    '--color-surface-50': '223 221 227', // #dfdde3
    '--color-surface-100': '212 210 218', // #d4d2da
    '--color-surface-200': '201 199 209', // #c9c7d1
    '--color-surface-300': '169 165 181', // #a9a5b5
    '--color-surface-400': '104 98 125', // #68627d
    '--color-surface-500': '39 30 69', // #271e45
    '--color-surface-600': '35 27 62', // #231b3e
    '--color-surface-700': '29 23 52', // #1d1734
    '--color-surface-800': '23 18 41', // #171229
    '--color-surface-900': '19 15 34', // #130f22
  },
};
