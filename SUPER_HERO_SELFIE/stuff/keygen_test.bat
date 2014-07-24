cd /d %~dp0
keytool -genkey -v -keystore super_selfi.keystore -alias super_selfi -keyalg RSA -keysize 2048 -validity 10000