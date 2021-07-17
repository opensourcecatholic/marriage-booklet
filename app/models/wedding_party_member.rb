class WeddingPartyMember < ApplicationRecord
  belongs_to :project
  enum role: { bridesmaid: 0, groomsman: 1, ringbearer: 2, flowergirl: 3, fatherbride: 4, motherbride: 5, fathergroom: 6, mothergroom: 7, bestman: 8, maidofhonor: 9, matronofhonor: 10 }, _prefix: true
  enum relationship: { undefined: 0, father: 1, mother: 2, grandfather: 3, grandmother: 4, brother: 5, sister: 6, aunt: 7, uncle: 8, cousin: 9, nephew: 10, niece: 11, relative: 12, friend: 13, stepfather: 14, stepmother: 15, stepbrother: 16, stepsister: 17, greatgrandfather: 18, greatgrandmother: 19, greatuncle: 20, greataunt: 21 }, _prefix: true
end
