module.exports = {
	async rewrites() {
	  return [
		{
		  source: '/api/users',
		  destination: 'http://localhost:3000/users'
		}
	  ]
	}
}