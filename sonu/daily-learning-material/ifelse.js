let isVarified=false;
let isLoggedIn=true;
let hasPaymentToken=true;
let isGuest=true;

if(isVarified && isLoggedIn && hasPaymentToken)
{
    console.log('give access to the site');
}
else if(isLoggedIn || isGuest)
{
    console.log('Give Preview of site');
}
else
{
    console.log('Please contact to the admin');
}
