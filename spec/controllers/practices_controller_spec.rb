RSpec.describe PracticesController do

  describe '#index' do
    let(:user) { users(:user_1) }

    it 'returns a list of practices associated with the current user' do
      login_as(user)
      user.practices.create!(name: 'bloop', total_time: 120)
      get(:index,  format: :json)

      expect(JSON.parse(response.body)).to eq [user.practices.first.as_json]
    end

    it 'returns empty array when user not logged in' do
      user.practices.create!(name: 'bloop', total_time: 120)

      get(:index,  format: :json)
      expect(JSON.parse(response.body)).to eq []
    end
  end

  describe '#create' do
    it 'creates a practice with the given name' do
      post(:create, practice: { name: 'bloop' }, format: :json)

      expect(JSON.parse(response.body)['name']).to eq 'bloop'
    end
  end

end
