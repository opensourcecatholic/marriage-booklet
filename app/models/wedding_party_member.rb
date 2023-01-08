class WeddingPartyMember < ApplicationRecord
  belongs_to :project
  enum role: { undefined: 0, bridesmaid: 1, groomsman: 2, ringbearer: 3, flowergirl: 4, fatherbride: 5, motherbride: 6, fathergroom: 7, mothergroom: 8, bestman: 9, maidofhonor: 10, matronofhonor: 11, lector: 12, musician: 13, altarserver: 14, concelebrant: 15, groomswoman: 16, bridesman: 17, chorist: 18, soloist: 19 }, _prefix: true
  enum relationship: { undefined: 0, grandfather: 1, grandmother: 2, brother: 3, sister: 4, aunt: 5, uncle: 6, cousin: 7, nephew: 8, niece: 9, relative: 10, friend: 11, stepfather: 12, stepmother: 13, stepbrother: 14, stepsister: 15, greatgrandfather: 16, greatgrandmother: 17, greatuncle: 18, greataunt: 19 }, _prefix: true
end
