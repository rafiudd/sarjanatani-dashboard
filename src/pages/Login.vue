
<template>
    <div class="login">
        <br><br>
        <br><br>
        <div class="card-login">
                <h1>Masuk</h1>
                <label>Email</label><br>
                <input type="text" placeholder="Email" name=""><br><br>

                <label>Password</label><br>
                <input type="Password" placeholder="Email" name=""><br><br>
                <a href="/#dashboard">
                    <button>Masuk</button> 
                </a>
                <a href="/dashboard"><p>Lupa Password ?</p></a>
        </div>   
        <br><br>
        <br><br>
        <br><br>
        <br><br>
        <br>
    </div>
</template>

<script>
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

.login {
    margin-top: -20px;
    background: linear-gradient(118.63deg, #21D052 17.43%, rgba(7, 255, 255, 0.35) 105.94%);
}

h1 {
    margin-top: 0px !important;
    font-weight: bold;
    text-align: center;
    padding-right: 40px !important;
    font-family: 'Source Sans Pro', sans-serif !important;
    color: #36455A !important;
    letter-spacing: 0.05em;
}

.login {
    width: 100%;
    vertical-align: center;
}

.card-login {
    padding: 60px 10px 60px 80px;
    margin:0 auto;
    height: 500px;
    width: 40%;
    background-color: white;
    box-shadow: 30px 30px 80px rgba(0, 0, 0, 0.5);
}

input {
    margin-top: 5px;
    border-radius: 2px;
    border:1px solid #c4c4c4;
    width: 80%;
    height: 50px;
    padding-left: 20px;
}

button  {
    width: 80%;
    height: 50px;
    background-color: #2DDA93;
    border: 1px solid #2DDA93;
    color: white;
    border-radius: 2px;
    margin-bottom: 20px;
    font-weight: bold;
    letter-spacing: 0.05em;
}

button:hover {
    box-shadow: 30px 30px 100px rgba(0, 0, 0, 0.5);
    background-color: #28BE80;
    margin-top: 10px;
    cursor: pointer;
}


@media only screen and (max-width: 768px) {
    .card-login {
        width: 80%;
        padding: 40px 10px 40px 60px;
    }
}

@media only screen and (max-width: 480px) {
    .card-login {
        width: 90%;
        padding: 40px 0px 20px 40px;
    }
}
</style>