async function pingIpfsGateway(
	config=[
		'https://crustipfs.live/ipfs/',
		'https://gw.crust-gateway.com/ipfs/',
		'https://ipfs.io/ipfs/',
		'https://crustipfs.info/ipfs/',
		'https://gateway.pinata.cloud/ipfs/',
		'https://gw.crust-gateway.xyz/ipfs/',
		'https://gw.crust-gateway.cc/ipfs/'
	], 
	defaultVideo='QmXCFbH7taH5WDBZa9MiFp4oVBFz2rtUupWCNTib69FP1Y', 
	timeout=8000
) {

	const defaultSrc = defaultVideo;
	let readyGateway = null;

	async function fetchWithTimeout(resource, options = {}) {
		const { timeOut = timeout} = options;

		const controller = new AbortController();
		const id = setTimeout(() => controller.abort(), timeOut);

		const response = await fetch(resource, {
			...options,
			signal: controller.signal
		});
		clearTimeout(id);

		return response;
	}

	const  checkVideos = async () => {
		if(!readyGateway) {
			try {
				const promises = config.map(url => fetchWithTimeout(url + defaultSrc), timeout);
        // Wait for the first promise to resolve
        const res = await Promise.race(promises);
				if(res.ok) {
					const url = res.url;
					readyGateway = url.replace(/[^\/]+$/,'');
					return readyGateway;
				}
			} catch (err) {
				console.log(err, ' => video error');
			}
		}
	};
	return await checkVideos();
}

module.exports = pingIpfsGateway;