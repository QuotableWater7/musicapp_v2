class User < ActiveRecord::Base

  has_secure_password

  has_many :practices

  validates_uniqueness_of :email

  validates :email, presence: true
  validates :password, presence: true

  before_create :create_remember_token

  def self.new_remember_token
    SecureRandom.urlsafe_base64
  end

  def self.digest(token)
    Digest::SHA1.hexdigest(token.to_s)
  end

private

  def create_remember_token
    self.remember_token = User.digest(User.new_remember_token)
  end

end
