import auth from '@react-native-firebase/auth';

export const handleCreated = (mail: string, password: string, checkPassword: string): void => {
    if (!mail || !password) {
        console.log("Email veya şifre boş geçilemez!");
        return;
    }
    if (checkPassword !== password) {
        console.log("Şifreleriniz Uyuşmuyor!");
        return;
    }
    auth().createUserWithEmailAndPassword(mail, password)
        .then(() => {
            console.log("Kaydınız Başarıyla oluşturuldu.");
            auth().signOut();
        })
        .catch((err) => {
            console.log(err.code);
        });
}

export const handleLogin = (mail: string, password: string, navigation: any): void => {

    if (!mail || !password) {
        console.log("Email veya şifre boş geçilemez!")
        return;
    }
    auth().signInWithEmailAndPassword(mail, password)
        .then(() => {
            navigation.navigate("TabNavigator")
        })
        .catch((err) => {
            console.log(err)
        })
}
export const handleSignOut = (): void => {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}