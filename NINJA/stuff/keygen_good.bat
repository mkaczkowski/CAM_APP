cd /d %~dp0
keytool -genkey -v -keystore ninja_camera.keystore -alias ninja_camera -keyalg RSA -keysize 2048 -validity 10000