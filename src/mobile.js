//SmartPhone
class SmartPhone
{
    constructor(ram,batteryPower,price)
    {
        this.ram=ram
        this,batteryPower= batteryPower
        this.price=price
    }
    displayFeatures()
    {
        return this.ram + "\n" + this.battery + "\n" + this.price
    }
    remainingAmount(amountIhave)
    {
        
        if (this.price >= amountIhave)
        return 'Customer has no more amount'
        else if (amountIhave > this.price)
        {
            amountIhave = amountIhave-this.price
            return
        }
        return amountIhave
       
    }
}


// AndroidPhone

class AndroidPhone
{
    constructor(modelName, ram, batteryPower, price) {
        this.modelName =modelName
        this.ram=ram
        this.price=price
        this.batteryPower=batteryPower
    }
    displayFeatures()
    {
        return this.modelName+ "\n"+ this.ram + "\n" + this.batteryPower + "\n" + this.price
    }
    remainingAmount(amountIhave)
    {
        if (this.price >= amountIhave)
        return 'Customer has no more amount'
        else if (amountIhave > this.price)
        {
        this.price = Math.abs(this.price - amountIhave)
        return 'Customer has remaining Rs.'+this.price+' after buying the android phone'
        }
        else
        {
        return amountIhave-this.price
        }
    }
}

// IPhone

class IPhone
{
    constructor(seriesName, ram, batteryPower, price) {
        this.seriesName =seriesName
        this.ram=ram
        this.price=price
        this.batteryPower=batteryPower
    }
    displayFeatures()
    {
        return this.seriesName+ "\n"+ this.ram + "\n" + this.batteryPower + "\n" + this.price
    }
    remainingAmount(amountIhave)
    {
        if (this.price > amountIhave)
        return "Customer can't able to buy a phone due to insufficient amount"
        else if (this.price === amountIhave)
        return "Customer has no more amount"
        else if (amountIhave > this.price)
        {
        this.price = Math.abs(this.price - amountIhave)
        return 'Customer has remaining Rs.'+this.price+' after buying an iphone'
        }
    
        else
        {
        return amountIhave-this.price
        }
    }
}



//MobileCampus
class MobileCampus
{
    constructor(NoOfMobiles,NoOfAndroidMobiles,NoOfIPhoneMobiles)
    {
        this.NoOfMobiles=NoOfMobiles
        this.NoOfAndroidMobiles = NoOfAndroidMobiles
        this.NoOfIPhoneMobiles = NoOfIPhoneMobiles
    }
    changeMobileAvailabilityNumber(count,type)
    {
        if(type === 'android'){
            this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
            return 'Available android mobiles are '+this.NoOfAndroidMobiles;

        }
        if(type === 'iphone'){
            this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
            return 'Available iphone mobiles are '+this.NoOfIPhoneMobiles;
        }
        return this.NoOfMobiles -count
    }
}