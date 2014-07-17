cd /d %~dp0
keytool -genkey -v -keystore ghost_camer.keystore -alias ghost_camer -keyalg RSA -keysize 2048 -validity 10000