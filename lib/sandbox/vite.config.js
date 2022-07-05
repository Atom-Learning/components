import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  plugins: [reactRefresh()],
  root: path.resolve(__dirname),
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '..', 'src')
    }
  },
  server: {
    strictPort: true,
    port: 1234
  }
}

export default config
