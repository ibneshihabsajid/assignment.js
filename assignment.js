

//  Kilometer to meter area
function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer > 0) {
        meter = kilometer * 1000;
    } else if (kilometer <= 0) {
        return "distance cannot be negative";
    }
    return meter;
}


//  Budget Calculator area

function budgetCalculator(watch, phone, leptop){
    var total = (watch*50) + (phone*100) + (leptop*500);
    return total;
}
var totalprice = budgetCalculator(5,4,2);


// Hotel cost area


function hotelCost(pernight) {
    var rent = 0;
    if (pernight <= 10) {
        rent = pernight * 100;
    } else if (pernight <= 20) {
        var firstpart = 10 * 100;
        var remainign = pernight - 10;
        var secondpart = remainign * 80;
        rent = firstpart + secondpart;
    } else {
        var firstpart = 10 * 100;
        var secondpart = 10 * 80;
        var remainign = pernight - 20;
        var thirdpart = remainign * 50;
        rent = firstpart + secondpart + thirdpart;
    }
    return rent;
}



// megaFriend area


var userName = ["sajid", "anonnabinte", "chu", "khan", "ibne", "as"];

function megaFriend(userName) {
    var maxword = userName[0];
    for (var i = 0; i < userName.length; i++) {
        var element = userName[i];
        if (element.length > maxword.length) {
            maxword = element;
        }

    }
    return maxword;
}








 





















