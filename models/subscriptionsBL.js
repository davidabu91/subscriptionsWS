const subscriptions = require('./subscriptionsModel');

exports.getAll = function() {

    return new Promise((resolve, reject) => {
        subscriptions.find({}, function(err, subscriptions) {
            if (err) {
                reject(err)
            } else {
                resolve(subscriptions)
            }
        })
    })
}


exports.getSubscription = function(id) {

    return new Promise((resolve, reject) => {
        subscriptions.findById(id, function(err, subscription) {
            if (err) {
                reject(err)
            } else {
                resolve(subscription)
            }
        })
    })
}


exports.addSubscription = function(obj) {
    return new Promise((resolve, reject) => {
        const newsubscriptions = new subscriptions({
            MemberId: obj.memberId,
            Movies: obj.movies
        })

        newsubscriptions.save(function(err) {
            if (err) {
                reject(err)
                console.log('err', err);
            } else {
                resolve('Created!')
                console.log('Created');
            }
        })

    })

}

exports.updateSubscription = function(id, obj) {
    return new Promise((resolve, reject) => {
        subscriptions.findByIdAndUpdate(id, {
            MemberId: obj.memberId,
            Movies: obj.movies
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Updated !')
            }
        })
    })
}

exports.deleteSubscription = function(id) {

    return new Promise((resolve, reject) => {
        subscriptions.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Deleted')
            }
        })
    })
}