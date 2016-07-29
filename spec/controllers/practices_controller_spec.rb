RSpec.describe PracticesController do

  describe '#index' do
    let(:user) { users(:user_1) }

    before(:each) do
      login_as(user)
    end

    it 'returns a list of practices associated with the current user' do
      user.practices.create!(name: 'bloop', total_time: 120)
      get(:index,  format: :json)

      expect(JSON.parse(response.body)).to eq [user.practices.first.as_json]
    end
  end

  describe '#create' do
    it 'creates a practice with the given name' do
      post(:create, practice: { name: 'bloop' }, format: :json)

      expect(JSON.parse(response.body)['name']).to eq 'bloop'
    end
  end

end
