# def findPrime(n):
#     d = digits(n)




def digits(n):
    c = 0
    while(n>0):
        n = int(n/10)
        c = c + 1
    print(c)


digits(992314569)