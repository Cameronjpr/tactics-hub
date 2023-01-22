<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Profile</h1>

<h2>Hi, {data?.session?.user?.email}</h2>
<form method="POST" action="?/signout">
	<button>Sign out</button>
</form>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
