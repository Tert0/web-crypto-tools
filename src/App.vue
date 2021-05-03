<template>
    <div id="nav">
         | <router-link to="/">Home</router-link> |
        <router-link to="/aes-encrypt">AES Encrypt</router-link> |
        <router-link to="/aes-decrypt">AES Decrypt</router-link> | 
        <router-link to="/base64-encode">Base64 Encode</router-link> |
        <router-link to="/base64-decode">Base64 Decode</router-link> | 
        <router-link to="/dec-hex">Dec to Hex</router-link> | 

        <router-link to="/hex-dec">Hex to Dec</router-link> | 
    </div>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
