cd /d %~dp0
keytool -genkey -v -keystore ghost_camera.keystore -alias ghost_camera -keyalg RSA -keysize 2048 -validity 10000