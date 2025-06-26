export const colorspaces = ['gray', 'sRGB'] as const

export interface ScanConfig {
  rotate: number
  rotate_var: number
  colorspace: (typeof colorspaces)[number]
  blur: number
  noise: number
  border: boolean
  scale: number
  brightness: number
  yellowish: number
  contrast: number
  output_format: 'image/png' | 'image/jpeg'
}

export const defaultConfig: ScanConfig = {
  rotate: 0.5,
  rotate_var: 0.5, // 正负0.5
  colorspace: 'sRGB',
  blur: 0.2,
  noise: 0.1,
  border: false,
  scale: 3,
  brightness: 0.96,
  yellowish: 0,
  contrast: 1,
  output_format: 'image/jpeg'
}
