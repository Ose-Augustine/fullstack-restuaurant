class Food < ApplicationRecord
  belongs_to :user
  has_many :orders
  has_many :drinks, through: :orders
end
