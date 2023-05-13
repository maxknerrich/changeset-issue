import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.saturdays.app',
	appName: 'saturdays',
	webDir: 'build',
	server: {
		androidScheme: 'https',
	},
};

export default config;
