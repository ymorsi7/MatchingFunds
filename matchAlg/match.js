(function($) {

    const user = {
        // category,
        // $$,
    }

    function outOrg(spons, all_orgs) {
        var orgs = [];
        for (let i = 0; i < all_orgs.length; i++) {
            for (let j = 0; j < all_orgs.role.length; j++) {
                if((spons.role).indexOf((all_orgs.role)[i]) !== -1) {
                    orgs.push(spons.role);
                }
            }
        }
        return orgs;
        
    }

    function outSponsor(org) {
        var spons = [];
        for (let i = 0; i < spons.length; i++) {
            for (let j = 0; j < spons.role.length; j++) {
                if((all_orgs.role).indexOf((spons.role)[i]) !== -1) {
                    spons.push(all_orgs.role);
                }
            }
        }
        return spons;
    }
})
