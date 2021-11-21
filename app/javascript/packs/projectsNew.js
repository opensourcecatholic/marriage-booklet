import "stylesheets/projects"

$(document).ready(() => {
    let idx = parseInt($('.weddingPartyMembersIndex').last().val()) + 1;
    //alert("document is ready!");

    $(document).on('click','#addWeddingPartyMember',ev => {
        const $parentDiv = $(ev.target).closest('div');
        let newPartyMemberRow = `<div class="col-span-6 border-l-8 border-solid border-green-400 rounded-lg weddingPartyMemberWrapper addedDynamically">
        <div class="w-full grid grid-cols-6 gap-6 border-t border-b border-r border-dashed border-gray-300 rounded-lg p-10 relative -left-2.5">
        <div class="removeWeddingPartyMember bg-red-700 hover:bg-red-500 absolute top-2 right-2 inline-block p-2 rounded text-xs text-white cursor-pointer"><i class="fa fa-trash-alt"></i></div>
        <div class="col-span-6 sm:col-span-2">
            <label for="project_wedding_party_members_attributes_${idx}_role" class="block text-sm font-medium text-gray-700 required">Role</label>
            <select id="project_wedding_party_members_attributes_${idx}_role" name="project[wedding_party_members_attributes][${idx}][role]" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight">
                <option value="">---</option>
                <option value="bridesmaid">${I18n.t("activerecord.attributes.wedding_party_member.role_bridesmaid")}</option>
                <option value="groomsman">${I18n.t("activerecord.attributes.wedding_party_member.role_groomsman")}</option>
                <option value="ringbearer">${I18n.t("activerecord.attributes.wedding_party_member.role_ringbearer")}</option>
                <option value="flowergirl">${I18n.t("activerecord.attributes.wedding_party_member.role_flowergirl")}</option>
                <option value="fatherbride">${I18n.t("activerecord.attributes.wedding_party_member.role_fatherbride")}</option>
                <option value="motherbride">${I18n.t("activerecord.attributes.wedding_party_member.role_motherbride")}</option>
                <option value="fathergroom">${I18n.t("activerecord.attributes.wedding_party_member.role_fathergroom")}</option>
                <option value="mothergroom">${I18n.t("activerecord.attributes.wedding_party_member.role_mothergroom")}</option>
                <option value="bestman">${I18n.t("activerecord.attributes.wedding_party_member.role_bestman")}</option>
                <option value="maidofhonor">${I18n.t("activerecord.attributes.wedding_party_member.role_maidofhonor")}</option>
                <option value="matronofhonor">${I18n.t("activerecord.attributes.wedding_party_member.role_matronofhonor")}</option>
                <option value="lector">${I18n.t("activerecord.attributes.wedding_party_member.role_lector")}</option>
                <option value="altarserver">${I18n.t("activerecord.attributes.wedding_party_member.role_altarserver")}</option>
                <option value="musician">${I18n.t("activerecord.attributes.wedding_party_member.role_musician")}</option>
                <option value="chorist">${I18n.t("activerecord.attributes.wedding_party_member.role_chorist")}</option>
                <option value="soloist">${I18n.t("activerecord.attributes.wedding_party_member.role_soloist")}</option>
            </select>
        </div>
        <div class="col-span-6 sm:col-span-2">
            <label for="project_wedding_party_members_attributes_${idx}_relationship" class="block text-sm font-medium text-gray-700">Relationship</label>
            <select id="project_wedding_party_members_attributes_${idx}_relationship" name="project[wedding_party_members_attributes][${idx}][relationship]" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight">
                <option value="undefined">---</option>
                <option value="father">Father of</option>
                <option value="mother">Mother of</option>
                <option value="grandfather">Grandfather of</option>
                <option value="grandmother">Grandmother of</option>
                <option value="brother">Brother of</option>
                <option value="sister">Sister of</option>
                <option value="aunt">Aunt of</option>
                <option value="uncle">Uncle of</option>
                <option value="cousin">Cousin of</option>
                <option value="nephew">Nephew of</option>
                <option value="niece">Niece of</option>
                <option value="relative">Relative of</option>
                <option selected="selected" value="friend">Friend of</option>
                <option value="stepfather">Stepfather of</option>
                <option value="stepmother">Stepmother of</option>
                <option value="stepbrother">Stepbrother of</option>
                <option value="stepsister">Stepsister of</option>
                <option value="greatgrandfather">Great grandfather of</option>
                <option value="greatgrandmother">Great grandmother of</option>
                <option value="greatuncle">Great uncle of</option>
                <option value="greataunt">Great aunt of</option>
            </select>
        </div>
        <div class="col-span-6 sm:col-span-2">
            <label for="project_wedding_party_members_attributes_${idx}_relationshipTo" class="block text-sm font-medium text-gray-700">To</label>
            <select id="project_wedding_party_members_attributes_${idx}_relationshipTo" name="project[wedding_party_members_attributes][${idx}][relationshipTo]" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight">
                <option value="undefined">---</option>
                <option value="theBride">the Bride</option>
                <option value="theGroom">the Groom</option>
                <option value="theFamilyOfTheBride">the Bride's family</option>
                <option value="theFamilyOfTheGroom">the Groom's family</option>
                <option value="theBrideAndTheGroom">the Bride and the Groom</option>
                <option value="theFamiliesOfTheBrideAndTheGroom">the families of the Bride and the Groom</option>
            </select>
        </div>
        <div class="col-span-6 sm:col-span-3">
            <label for="project_wedding_party_members_attributes_${idx}_firstName" class="block text-sm font-medium text-gray-700 required">First Name</label>
            <input type="text" id="project_wedding_party_members_attributes_${idx}_firstName" name="project[wedding_party_members_attributes][${idx}][firstName]" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight" />
        </div>
        <div class="col-span-6 sm:col-span-3">
            <label for="project_wedding_party_members_attributes_${idx}_lastName" class="block text-sm font-medium text-gray-700 required">Last Name</label>
            <input type="text" id="project_wedding_party_members_attributes_${idx}_lastName" name="project[wedding_party_members_attributes][${idx}][lastName]" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight" />
        </div></div></div>`;
        $(newPartyMemberRow).insertBefore($parentDiv);
        idx++;
    });

    $(document).on('click', '.removeWeddingPartyMember', ev => {
        const $parentDiv = $(ev.target).closest('.weddingPartyMemberWrapper');
        $parentDiv.remove();

        idx = parseInt($('.weddingPartyMembersIndex').last().val()) + 1;
        console.log('resetting idx back to ' + idx);
        console.log('there are still ' + $('.addedDynamically').length + ' dynamically added wedding party members');
        $('.addedDynamically').each((i,el) => {
            $(el).find('label, select, input').each((ix,elx) => {
                if( $(elx).is("[for]") ) {
                    let forVal = $(elx).attr('for').replace( /_\d+_/g, `_${idx}_`);
                    $(elx).attr('for',forVal);
                }
                if( $(elx).is("[id]") ) {
                    let idVal = $(elx).attr('id').replace( /_\d+_/g, `_${idx}_`);
                    $(elx).attr('id',idVal);
                }
                if( $(elx).is("[name]") ) {
                    let nameVal = $(elx).attr('name').replace( /\[\d+\]/g, `[${idx}]`);
                    $(elx).attr('name',nameVal);
                }
            });
            idx++;
        });
    });
});

