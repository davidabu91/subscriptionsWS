const Members = require('./membersModel');

exports.getAll = function() {

    return new Promise((resolve, reject) => {
        Members.find({}, function(err, members) {
            if (err) {
                reject(err)
            } else {
                resolve(members)
            }
        })
    })
}


exports.getMember = function(id) {

    return new Promise((resolve, reject) => {
        Members.findById(id, function(err, member) {
            if (err) {
                reject(err)
            } else {
                resolve(member)
            }
        })
    })
}


exports.addMember = function(obj) {
    try {
        const newMembers = new Members({
            Name: obj.name,
            Email: obj.email,
            City: obj.city
        })

        newMembers.save(function(err) {

            return new Promise((resolve, reject) => {

                if (err) {
                    reject(err)
                } else {
                    resolve('Created!')
                    console.log('Created');
                }

            })

        })
    } catch {
        console.log('addmembers error');
    }


}

exports.updateMembers = function(id, obj) {
    return new Promise((resolve, reject) => {
        Members.findByIdAndUpdate(id, {
            Name: obj.name,
            Email: obj.email,
            City: obj.city
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Updated !')
            }
        })
    })
}

exports.deleteMember = function(id) {

    return new Promise((resolve, reject) => {
        Members.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err, 'err')
                console.log(err);
            } else {
                resolve('Deleted')
            }
        })
    })
}

exports.deleteAll = function() {

    return new Promise((resolve, reject) => {
        Members.deleteMany({}, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve("Deleted")
            }
        });

    })
}