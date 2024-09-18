import type { Config } from 'tailwindcss';

// RGB 색상 문자열을 받아 투명도를 조합하여 rgba로 변환하는 함수
function generateColorWithOpacity(hex: string, opacity: number) {
  const r = parseInt(hex.slice(1, 3), 16); // 빨강
  const g = parseInt(hex.slice(3, 5), 16); // 녹색
  const b = parseInt(hex.slice(5, 7), 16); // 파랑

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`; // rgba 형식의 문자열 반환
}

// 기본 색상과 원하는 투명도를 사용하여 색상 팔레트를 생성하는 함수
function generateColors(hex: string, opacities: number[]) {
  const colors: Record<number, string> = {};
  opacities.forEach((opacity) => {
    colors[opacity] = generateColorWithOpacity(hex, opacity); // 각 투명도에 따른 색상 생성
  });
  return colors;
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      errorText: 'text-delete text-sm',
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        delete: {
          DEFAULT: '#FF8C8C',
          ...generateColors('#FF8C8C', [20, 40, 60, 80]),
        },
        main: {
          DEFAULT: '#6868FF',
          ...generateColors('#6868FF', [20, 40, 60, 80]),
        },
        sub: {
          DEFAULT: '#ABA5A5',
          ...generateColors('#ABA5A5', [20, 40, 60, 80]),
        },
        sub2: {
          DEFAULT: '#808080',
          ...generateColors('#808080', [20, 40, 60, 80]),
        },
        background: '#FFFFFF60',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
