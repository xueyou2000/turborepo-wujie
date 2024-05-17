import type { ConfigEnv, UserConfig } from 'vite'
import { mergeConfig } from 'vite'
import { useApplicationConfig } from '@repo/vite-config'

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const applicationConfig = useApplicationConfig({ command, mode })

  const overrides = {
    server: {
      // 端口号
      port: 3000
    }
  }

  return mergeConfig(applicationConfig, overrides)
}
