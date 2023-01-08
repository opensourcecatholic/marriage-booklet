import { Controller } from "@hotwired/stimulus"
import { i18n } from "../config/i18n"
const I18n = i18n; //needed in order for i18n-tasks scanner to be able to pick up on translation strings!

export default class extends Controller {

    static targets = ["div", "button"];

    initialize() {
        this.idx = parseInt($('.weddingPartyMembersIndex').last().val()) + 1;
        console.log('wedding party member controller initialized!');
        console.log('divTargets:');
        console.log(this.divTargets);
        console.log('buttonTargets:');
        console.log(this.buttonTargets);
    }

    connect() {
        this.buttonTarget.addEventListener("click", ev => {
            console.log('Add wedding party member button was clicked!');
            //const $parentDiv = $(ev.currentTarget).closest('div');
            const $parentDiv = $(this.divTarget);
            let newPartyMemberRow = `<div
                    class="col-span-6 border-l-8 border-solid border-green-400 rounded-lg weddingPartyMemberWrapper addedDynamically">
                <div class="w-full grid grid-cols-6 gap-6 border-t border-b border-r border-dashed border-gray-300 rounded-lg p-10 relative -left-2.5">
                    <div data-action="click->wedding-party-member#remove" class="bg-red-700 hover:bg-red-500 absolute top-2 right-2 inline-block p-2 rounded text-xs text-white cursor-pointer">
                        <i class="fas fa-trash-alt"></i>
                    </div>
                    <div class="col-span-6 sm:col-span-2">
                        <input type="hidden" class="weddingPartyMembersIndex" value="${this.idx}" />
                        <label for="project_wedding_party_members_attributes_${this.idx}_role" class="block text-sm font-medium text-gray-700" autocomplete="off">${I18n.t('activerecord.attributes.wedding_party_member.role')}</label>
                        <select id="project_wedding_party_members_attributes_${this.idx}_role"
                                class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight"
                                name="project[wedding_party_members_attributes][${this.idx}][role]"
                                data-action="change->wedding-party-member#updateRelationshipStatus">
                            <option value="undefined">${I18n.t('activerecord.attributes.wedding_party_member.role_undefined')}</option>
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
                            <option value="chorist">${I18n.t('activerecord.attributes.wedding_party_member.role_chorist')}</option>
                            <option value="soloist">${I18n.t('activerecord.attributes.wedding_party_member.role_soloist')}</option>
                        </select>
                    </div>
                    <div class="col-span-1 sm:col-span-1">${I18n.t('pages.projectNew.wedding_party.or')}</div>
                    <div class="col-span-6 sm:col-span-1">
                        <label for="project_wedding_party_members_attributes_${this.idx}_relationship" class="block text-sm font-medium text-gray-700" autocomplete="off">${I18n.t('activerecord.attributes.wedding_party_member.relationship')}</label>
                        <select id="project_wedding_party_members_attributes_${this.idx}_relationship"
                                class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight weddingPartyMemberRelationship"
                                name="project[wedding_party_members_attributes][${this.idx}][relationship]">
                            <option value="undefined">${I18n.t('activerecord.attributes.wedding_party_member.relationship_undefined')}</option>
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
                    <div class="col-span-6 sm:col-span-2">
                        <label for="project_wedding_party_members_attributes_${this.idx}_relationshipTo" class="block text-sm font-medium text-gray-700" autocomplete="off">${I18n.t('activerecord.attributes.wedding_party_member.relationshipTo')}</label>
                        <select id="project_wedding_party_members_attributes_${this.idx}_relationshipTo"
                                class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight weddingPartyMemberRelationshipTo"
                                name="project[wedding_party_members_attributes][${this.idx}][relationshipTo]">
                            <option value="">---</option>
                            <option value="theBride">${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} ${I18n.t('activerecord.attributes.user.role_bride')}</option>
                            <option value="theGroom">${I18n.t('activerecord.attributes.wedding_party_member.ofTheMascSing')} ${I18n.t('activerecord.attributes.user.role_groom')}</option>
                            <option value="theFamilyOfTheBride">${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} family ${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} ${I18n.t('activerecord.attributes.user.role_bride')}</option>
                            <option value="theFamilyOfTheGroom">${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} family ${I18n.t('activerecord.attributes.wedding_party_member.ofTheMascSing')} ${I18n.t('activerecord.attributes.user.role_groom')}</option>
                            <option value="theBrideAndTheGroom">${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} ${I18n.t('activerecord.attributes.user.role_bride')} and ${I18n.t('activerecord.attributes.wedding_party_member.ofTheMascSing')} ${I18n.t('activerecord.attributes.user.role_groom')}</option>
                            <option value="theFamiliesOfTheBrideAndTheGroom">${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemPlural')} families ${I18n.t('activerecord.attributes.wedding_party_member.ofTheFemSing')} ${I18n.t('activerecord.attributes.user.role_bride')} and ${I18n.t('activerecord.attributes.wedding_party_member.ofTheMascSing')} ${I18n.t('activerecord.attributes.user.role_groom')}</option>
                        </select>
                    </div>
                    <div class="col-span-1 sm:col-span-1">
                        <label for="project_wedding_party_members_attributes_${this.idx}_namePrefix" class="block text-sm font-medium text-gray-700" autocomplete="off">${I18n.t('activerecord.attributes.wedding_party_member.namePrefix')}</label>
                        <select id="project_wedding_party_members_attributes_${this.idx}_namePrefix"
                                class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight"
                                name="project[wedding_party_members_attributes][${this.idx}][namePrefix]"/>
                            <option value="">---</option>
                            <option value="Mr.">${I18n.t("projects.new.weddingpartymember.namePrefix.Mr")}</option>
                            <option value="Mrs.">${I18n.t("projects.new.weddingpartymember.namePrefix.Mrs")}</option>
                            <option value="Ms.">${I18n.t("projects.new.weddingpartymember.namePrefix.Ms")}</option>
                            <option value="Mister">${I18n.t("projects.new.weddingpartymember.namePrefix.Mister")}</option>
                            <option value="Missus">${I18n.t("projects.new.weddingpartymember.namePrefix.Missus")}</option>
                            <option value="Miss">${I18n.t("projects.new.weddingpartymember.namePrefix.Miss")}</option>
                            <option value="Madame">${I18n.t("projects.new.weddingpartymember.namePrefix.Madame")}</option>
                            <option value="Madamesoille">${I18n.t("projects.new.weddingpartymember.namePrefix.Madamesoille")}</option>
                            <option value="Master">${I18n.t("projects.new.weddingpartymember.namePrefix.Master")}</option>
                            <option value="Rev.">${I18n.t("projects.new.weddingpartymember.namePrefix.Rev")}</option>
                            <option value="Reverend">${I18n.t("projects.new.weddingpartymember.namePrefix.Reverend")}</option>
                        </select>
                    </div>
                    <div class="col-span-5 sm:col-span-2">
                        <label for="project_wedding_party_members_attributes_${this.idx}_firstName"" class="block text-sm font-medium text-gray-700 required" autocomplete="off">${I18n.t('activerecord.attributes.wedding_party_member.firstName')}</label>
                        <input  type="text"
                                id="project_wedding_party_members_attributes_${this.idx}_firstName"
                                class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight"
                                name="project[wedding_party_members_attributes][${this.idx}][firstName]"/>
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="project_wedding_party_members_attributes_${this.idx}_lastName" class="block text-sm font-medium text-gray-700 required" autocomplete="off">${I18n.t('activerecord.attributes.wedding_party_member.lastName')}</label>
                        <input  type="text"
                                id="project_wedding_party_members_attributes_${this.idx}_lastName"
                                class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-gray-300 rounded py-2 px-3 sm:text-sm leading-tight"
                                name="project[wedding_party_members_attributes][${this.idx}][lastName]"/>
                    </div>
                </div>
            </div>`;
            $(newPartyMemberRow).insertBefore($parentDiv);
            this.idx++;
        });

    }

    remove(ev) {
        console.log('remove wedding party member button was clicked');
        console.log(ev.currentTarget);
        const $parentDiv = $(ev.currentTarget).closest('.weddingPartyMemberWrapper');
        $parentDiv.remove();

        let idx = parseInt($('.weddingPartyMembersIndex').last().val()) + 1;
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
    };

    updateRelationshipStatus(ev) {
        console.log('wedding party member role was changed, new value = ' + ev.currentTarget.value);
        const $parentDiv = $(ev.currentTarget).closest('.weddingPartyMemberWrapper');
        $parentDiv.find('.weddingPartyMemberRelationship,.weddingPartyMemberRelationshipTo').attr('disabled', ev.currentTarget.value != "undefined");
    };

}
