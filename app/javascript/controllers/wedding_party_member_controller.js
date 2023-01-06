import { Controller } from "@hotwired/stimulus"
import { i18n } from "../config/i18n"
const I18n = i18n; //needed in order for i18n-tasks scanner to be able to pick up on translation strings!

export default class extends Controller {
    static targets = ["div", "button"];
    initialize() {
        this.idx = 0;
        console.log('wedding party member controller initialized!');
    }

    connect() {
        this.buttonTarget.addEventListener("click", ev => {
            console.log('Add wedding party member button was clicked!');
            //const $parentDiv = $(ev.currentTarget).closest('div');
            const $parentDiv = $(this.divTarget);
            let newPartyMemberRow = `<div class="col-span-5 sm:col-span-2 border-t-2 border-dotted">
                <label for="partyMemberRole_${this.idx}" class="block text-sm font-medium text-gray-700" autocomplete="off">Role</label>
                <select id="partyMemberRole_${this.idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    <option value="">---</option>
                    <option value="bestMan">${I18n.t('activerecord.attributes.wedding_party_member.role_bestman')}</option>
                    <option value="maidOfHonor">${I18n.t('activerecord.attributes.wedding_party_member.role_maidofhonor')}</option>
                    <option value="matronOfHonor">${I18n.t('activerecord.attributes.wedding_party_member.role_matronofhonor')}</option>
                    <option value="bridesmaid">${I18n.t('activerecord.attributes.wedding_party_member.role_bridesmaid')}</option>
                    <option value="bridesman">${I18n.t('activerecord.attributes.wedding_party_member.role_bridesman')}</option>
                    <option value="groomsman">${I18n.t('activerecord.attributes.wedding_party_member.role_groomsman')}</option>
                    <option value="groomswoman">${I18n.t('activerecord.attributes.wedding_party_member.role_groomswoman')}</option>
                    <option value="fatherOfTheBride">${I18n.t('activerecord.attributes.wedding_party_member.role_fatherbride')}</option>
                    <option value="motherOfTheBride">${I18n.t('activerecord.attributes.wedding_party_member.role_motherbride')}</option>
                    <option value="fatherOfTheGroom">${I18n.t('activerecord.attributes.wedding_party_member.role_fathergroom')}</option>
                    <option value="motherOfTheGroom">${I18n.t('activerecord.attributes.wedding_party_member.role_mothergroom')}</option>
                    <option value="lector">${I18n.t('activerecord.attributes.wedding_party_member.role_lector')}</option>
                    <option value="concelebrant">${I18n.t('activerecord.attributes.wedding_party_member.role_concelebrant')}</option>
                    <option value="ringBearer">${I18n.t('activerecord.attributes.wedding_party_member.role_ringbearer')}</option>
                    <option value="flowerGirl">${I18n.t('activerecord.attributes.wedding_party_member.role_flowergirl')}</option>
                    <option value="musician">${I18n.t('activerecord.attributes.wedding_party_member.role_musician')}</option>
                    <option value="altarServer">${I18n.t('activerecord.attributes.wedding_party_member.role_altarserver')}</option>
                </select>
            </div>
            <div class="col-span-1 sm:col-span-1">${I18n.t('pages.projectNew.wedding_party.or')}</div>
            <div class="col-span-6 sm:col-span-1 border-t-2 border-dotted">
                <label for="partyMemberRelationshipType_${this.idx}" class="block text-sm font-medium text-gray-700" autocomplete="off">${I18n.t('activerecord.attributes.wedding_party_member.relationship')}</label>
                <select id="partyMemberRelationshipType_${this.idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    <option value="">${I18n.t('activerecord.attributes.wedding_party_member.relationship_undefined')}</option>
                    <option value="brother">${I18n.t('activerecord.attributes.wedding_party_member.relationship_brother')}</option>
                    <option value="sister">${I18n.t('activerecord.attributes.wedding_party_member.relationship_sister')}</option>
                    <option value="cousin">${I18n.t('activerecord.attributes.wedding_party_member.relationship_cousin')}</option>
                    <option value="friend">${I18n.t('activerecord.attributes.wedding_party_member.relationship_friend')}</option>
                    <option value="grandfather">${I18n.t('activerecord.attributes.wedding_party_member.relationship_grandfather')}</option>
                    <option value="grandmother">${I18n.t('activerecord.attributes.wedding_party_member.relationship_grandmother')}</option>
                    <option value="aunt">${I18n.t('activerecord.attributes.wedding_party_member.relationship_aunt')}</option>
                    <option value="uncle">${I18n.t('activerecord.attributes.wedding_party_member.relationship_uncle')}</option>
                    <option value="grandfather">${I18n.t('activerecord.attributes.wedding_party_member.relationship_greatgrandfather')}</option>
                    <option value="grandmother">${I18n.t('activerecord.attributes.wedding_party_member.relationship_greatgrandmother')}</option>
                    <option value="aunt">${I18n.t('activerecord.attributes.wedding_party_member.relationship_greataunt')}</option>
                    <option value="uncle">${I18n.t('activerecord.attributes.wedding_party_member.relationship_greatuncle')}</option>
                    <option value="nephew">${I18n.t('activerecord.attributes.wedding_party_member.relationship_nephew')}</option>
                    <option value="niece">${I18n.t('activerecord.attributes.wedding_party_member.relationship_niece')}</option>
                    <option value="stepfather">${I18n.t('activerecord.attributes.wedding_party_member.relationship_stepfather')}</option>
                    <option value="stepmother">${I18n.t('activerecord.attributes.wedding_party_member.relationship_stepmother')}</option>
                    <option value="stepbrother">${I18n.t('activerecord.attributes.wedding_party_member.relationship_stepbrother')}</option>
                    <option value="stepsister">${I18n.t('activerecord.attributes.wedding_party_member.relationship_stepsister')}</option>
                </select>
            </div>
            <div class="col-span-6 sm:col-span-2 border-t-2 border-dotted">
                <label for="partyMemberRelationshipTo_${this.idx}" class="block text-sm font-medium text-gray-700" autocomplete="off">${I18n.t('activerecord.attributes.wedding_party_member.relationshipTo')}</label>
                <select id="partyMemberRelationshipTo_${this.idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    <option value="">${I18n.t('activerecord.attributes.wedding_party_member.relationship_undefined')}</option>
                    <option value="bride">${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} ${I18n.t('activerecord.attributes.user.role_bride')}</option>
                    <option value="groom">${I18n.t('activerecord.attributes.wedding_party_member.ofTheMascSing')} ${I18n.t('activerecord.attributes.user.role_groom')}</option>
                    <option value="brideFamily">${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} family ${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} ${I18n.t('activerecord.attributes.user.role_bride')}</option>
                    <option value="groomFamily">${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} family ${I18n.t('activerecord.attributes.wedding_party_member.ofTheMascSing')} ${I18n.t('activerecord.attributes.user.role_groom')}</option>
                    <option value="brideAndGroom">${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} ${I18n.t('activerecord.attributes.user.role_bride')} and ${I18n.t('activerecord.attributes.wedding_party_member.ofTheMascSing')} ${I18n.t('activerecord.attributes.user.role_groom')}</option>
                    <option value="brideAndGroomFamilies">${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemPlural')} families ${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} ${I18n.t('activerecord.attributes.user.role_bride')} and ${I18n.t('activerecord.attributes.wedding_party_member.ofTheMascSing')} ${I18n.t('activerecord.attributes.user.role_groom')}</option>
                </select>
            </div>
            <div class="col-span-1 sm:col-span-1">
                <label for="partyMemberPrefix_${this.idx}" class="block text-sm font-medium text-gray-700" autocomplete="off">Title</label>
                <select id="partyMemberPrefix_${this.idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    <option value="">---</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mister">Mister</option>
                    <option value="Missus">Missus</option>
                    <option value="Miss">Miss</option>
                    <option value="Madame">Madame</option>
                    <option value="Madamesoille">Madamesoille</option>
                    <option value="Master">Master</option>
                    <option value="Rev.">Rev.</option>
                    <option value="Reverend">Reverend</option>
                </select>
            </div>
            <div class="col-span-5 sm:col-span-2">
                <label for="partyMemberFirstName_${this.idx}" class="block text-sm font-medium text-gray-700 required" autocomplete="off">First Name</label>
                <input type="text" id="partyMemberFirstName_${this.idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div class="col-span-6 sm:col-span-3">
                <label for="partyMemberLastName_${this.idx}" class="block text-sm font-medium text-gray-700 required" autocomplete="off">Last Name</label>
                <input type="text" id="partyMemberLastName_${this.idx}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>`;
            $(newPartyMemberRow).insertBefore($parentDiv);
            this.idx++;
        });
    }
}
