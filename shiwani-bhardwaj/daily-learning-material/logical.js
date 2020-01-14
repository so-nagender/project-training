let verified = false
let logged = true
let paymentdone = true
let guest = true
if (verified && logged && paymentdone)
{
    console.log('user is verified')
    console.log('grant access')

} else if (verified || guest )
{
console.log('give acess')
}
else 
{
    console.log('acess denied')
}