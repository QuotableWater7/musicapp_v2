RSpec.describe PracticesController do

  let(:user) { users(:user_1) }

  before(:each) { login_as(user) }

  describe '#index' do
    it 'returns a list of practices associated with the current user' do
      user.practices.create!(name: 'bloop', total_time: 120)
      get(:index, format: :json)

      expect(JSON.parse(response.body)).to eq [user.practices.first.as_json]
    end

    it 'returns empty array when user not logged in' do
      cookies.delete(:remember_token)
      user.practices.create!(name: 'bloop', total_time: 120)

      get(:index, format: :json)
      expect(JSON.parse(response.body)).to eq []
    end
  end

  describe '#update' do
    it 'updates a practice with the given params' do
      practice = user.practices.create!(name: 'bloop', total_time: 25)
      practice_params = { id: practice.id, name: 'bleep', total_time: 88 }

      expect do
        put(:update, format: :json, id: practice.id, practice: practice_params)
      end.to change { practice.reload.name }.from('bloop').to('bleep')

      expect(JSON.parse(response.body)['name']).to eq 'bleep'
    end
  end

  describe '#create' do
    it 'creates a practice with the given name' do
      post(:create, practice: { name: 'bloop' }, format: :json)

      expect(JSON.parse(response.body)['name']).to eq 'bloop'
    end
  end

end
