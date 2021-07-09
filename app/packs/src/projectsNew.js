
$(document).ready(() => {
    let idx=0;
    //alert("document is ready!");

    $(document).on('click','#addWeddingPartyMember',ev => {
        console.log('Add wedding party member button was clicked!');
        const $parentDiv = $(ev.target).closest('div');
        console.log($parentDiv);
        let newPartyMemberRow = `<div class="col-span-6 sm:col-span-2 border-t-2 border-dotted">
            <label for="partyMemberRole_${idx}" class="block text-sm font-medium text-gray-700 required" autocomplete="off">Role</label>
            <select id="partyMemberRole_${idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <option value="">---</option>
                <option value="bestMan">Best Man</option>
                <option value="maidOfHonor">Maid of Honor</option>
                <option value="matronOfHonor">Matron of Honor</option>
                <option value="bridesmaid">Bridesmaid</option>
                <option value="groomsman">Groomsman</option>
                <option value="groomswoman">Groomswoman</option>
                <option value="fatherOfTheBride">Father of the Bride</option>
                <option value="motherOfTheBride">Mother of the Bride</option>
                <option value="fatherOfTheGroom">Father of the Groom</option>
                <option value="motherOfTheGroom">Mother of the Groom</option>
                <option value="grandFatherOfTheBride">Grandfather of the Bride</option>
                <option value="grandMotherOfTheBride">Grandmother of the Bride</option>
                <option value="grandFatherOfTheGroom">Grandfather of the Groom</option>
                <option value="grandMotherOfTheGroom">Grandmother of the Groom</option>
                <option value="lector">Lector</option>
                <option value="celebrant">Celebrant</option>
                <option value="ringBearer">Ring bearer</option>
                <option value="flowerGirl">Flower girl</option>
                <option value="musician">Musician</option>
                <option value="altarServer">Altar server</option>
            </select>
        </div>
        <div class="col-span-6 sm:col-span-2 border-t-2 border-dotted">
            <label for="partyMemberRelationshipType_${idx}" class="block text-sm font-medium text-gray-700" autocomplete="off">Relationship</label>
            <select id="partyMemberRelationshipType_${idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <option value="">---</option>
                <option value="brother">Brother of</option>
                <option value="sister">Sister of</option>
                <option value="cousin">Cousin of</option>
                <option value="friend">Friend of</option>
            </select>
        </div>
        <div class="col-span-6 sm:col-span-2 border-t-2 border-dotted">
            <label for="partyMemberRelationshipTo_${idx}" class="block text-sm font-medium text-gray-700" autocomplete="off">To</label>
            <select id="partyMemberRelationshipTo_${idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <option value="">---</option>
                <option value="brother">the Bride</option>
                <option value="sister">the Groom</option>
                <option value="cousin">the Bride's family</option>
                <option value="friend">the Groom's family</option>
                <option value="friend">the Bride and the Groom</option>
                <option value="friend">the families of the Bride and the Groom</option>
            </select>
        </div>
        <div class="col-span-6 sm:col-span-3">
            <label for="partyMemberFirstName_${idx}" class="block text-sm font-medium text-gray-700 required" autocomplete="off">First Name</label>
            <input type="text" id="partyMemberFirstName_${idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div class="col-span-6 sm:col-span-3">
            <label for="partyMemberLastName_${idx}" class="block text-sm font-medium text-gray-700 required" autocomplete="off">Last Name</label>
            <input type="text" id="partyMemberLastName_${idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>`;
        $(newPartyMemberRow).insertBefore($parentDiv);
        idx++;
    });
});

