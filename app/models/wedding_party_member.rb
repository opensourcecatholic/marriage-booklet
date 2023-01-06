class WeddingPartyMember < ApplicationRecord
  belongs_to :project
  enum role: { bridesmaid: 0, groomsman: 1, ringbearer: 2, flowergirl: 3, fatherbride: 4, motherbride: 5, fathergroom: 6, mothergroom: 7, bestman: 8, maidofhonor: 9, matronofhonor: 10, lector: 11, musician: 12, altarserver: 13, concelebrant: 14, groomswoman: 15, bridesman: 16 }, _prefix: true
  enum relationship: { undefined: 0, grandfather: 1, grandmother: 2, brother: 3, sister: 4, aunt: 5, uncle: 6, cousin: 7, nephew: 8, niece: 9, relative: 10, friend: 11, stepfather: 12, stepmother: 13, stepbrother: 14, stepsister: 15, greatgrandfather: 16, greatgrandmother: 17, greatuncle: 18, greataunt: 19 }, _prefix: true
end
