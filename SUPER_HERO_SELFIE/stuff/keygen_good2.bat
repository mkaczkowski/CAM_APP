cd /d %~dp0
keytool -genkey -v -keystore super_hero.keystore -alias super_hero -keyalg RSA -keysize 2048 -validity 10000