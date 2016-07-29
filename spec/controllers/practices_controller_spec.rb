RSpec.describe PracticesController do

  it 'creates a practice with the given name' do
    post(:create, practice: { name: 'bloop' }, format: :json)

    expect(JSON.parse(response.body)['name']).to eq 'bloop'
  end

end
