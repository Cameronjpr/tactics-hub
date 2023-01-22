<script lang="ts">
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { supabaseClient } from '@lib/db';
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
			invalidate('user');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<nav>
	<span>
		<a href="/">Tactics Hub </a>
	</span>
	<section>
		<div>
			{#if $page?.data?.session}
				<a href="/profile"
					>Profile
					<img src="icons/full/user-circle.svg" width="24" height="24" alt="a house" />
				</a>
			{:else}
				<a href="/login"
					>Login
					<img src="icons/full/user-circle.svg" width="24" height="24" alt="a house" />
				</a>
			{/if}
		</div>
		<div>
			<a href="/create"
				>Create
				<img src="icons/full/create.svg" width="24" height="24" alt="a document" />
			</a>
		</div>
		<div>
			<a href="/settings"
				>Settings
				<img src="icons/full/cog.svg" width="24" height="24" alt="a cog" />
			</a>
		</div>
	</section>
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		color: white;
		display: flex;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		height: 44px;
		gap: var(--medium);
		padding: var(--medium);
		background: var(--color-secondary);
		align-items: center;
		justify-content: space-between;
	}

	section {
		display: flex;
		gap: var(--large);
	}

	nav div {
		display: flex;
		flex-direction: column;
		gap: var(--small);
		align-items: center;
		font-size: 0.75rem;
	}

	span {
		font-size: 2rem;
		justify-self: end;
	}

	a {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		gap: var(--small);
		text-decoration: none;
	}
	:visited {
		color: white;
	}

	main {
		padding: var(--medium);
	}
</style>
