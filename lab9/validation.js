function validateForm()
{
    var formObj = document.registration;

    //put everything in a dict
    var form = {};
    form["name"] = formObj.name.value;
    form["surname"] = formObj.surname.value;
    form["login"] = formObj.login.value;
    form["email"] = formObj.email.value;
    form["password"] = formObj.password.value;
    form["repeatPassword"] = formObj.repeatPassword.value;

    // check for empty form item
    for (var key in form)
    {
        if (form[key] == "")
        {
            alert(key + " is missing");
            return false;
        }
    }

    //check login
    console.log(form["login"]);
    if (!(6 < String(form["login"]).length < 20))
    {
        alert("Login length must be between 6 and 20 characters");
        return false;
    }
    else
    {
        login = form["login"];
        symbols = ['.', '_', '-'];
        for (let i = 0; i < login.length; ++i)
        {
            char = login[i];
            if (symbols.includes(char))
            {
                continue;
            }
            else if (('A' <= char.toUpperCase() && char.toUpperCase() <= 'Z'))
            {
                continue;
            }
            else 
            {
                return false;
            }
        }
    }

    // check if passwords match
    if (form["password"] == form["repeatPassword"])
    {
        // now let's check deeper
        if (6 < form["password"].length < 20)
        {
            // let's check if password is the same as login
            if (form["password"] == form["login"])
                return false;
            // good, now let's check chars
            if (!validatePassword(password))
            {
                alert("Password must be only latin charachters or: '-', '_', '.'");
                return false;
            }
        }
        else{
            alert("Password length must be between 6 and 20 characters");
            return false;
        }
    }
    return true;
}

function validatePassword(password)
{
    let validationStr = password;
    symbols = ['.', '_', '-'];
    for (let i = 0; i < validationStr.length; ++i)
    {
        char = validationStr[i];
        if (symbols.includes(char))
        {
            continue;
        }
        else if (('A' <= char.toUpperCase() && char.toUpperCase() <= 'Z'))
        {
            continue;
        }
        else 
        {
            return false;
        }        
    }
    return true;
}

function redirect()
{
    if (validateForm() == true)
    {
        window.location.assign("https://ceee.md/");
        return true;
    }
    return false;
}

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", redirect);