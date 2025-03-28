zimbra = require("zimbra-client");
zimbra.getAuthToken("localhost", "admin", "test123",
    function(err, authToken) {
        if(err != null) {
            console.log(err.message);
        }
        zimbra.createAccount("localhost",{sn:"Solovyev",givenName:"Greg",displayName:"Greg Solovyev",password:"test123",name:"greg4@gregs-mbp.local"},authToken,
            function(err1,accountObj) {
                if(err1 != null) {
                    if(err1.code == "account.ACCOUNT_EXISTS") {
                        console.log("an account with this name already exists");
                    } else {
                        console.log(err1.message);
                    }
                } else {
                    console.log("new account ID" + accountObj.id);
                }
            }
        );
    })
