let simple = {
    Time : 3,
    Principle : 40,
    Rate : 0.2,
    intrest : function(p, t)
    {

        result= (this.Principle*this.Rate*this.Time/100)
        console.log(result) 
    }
}
simple['Time']= 45
simple['Principle']= 500 
simple['Rate']= 0.5

simple.intrest(this.Time, this.Principle, this.Rate)