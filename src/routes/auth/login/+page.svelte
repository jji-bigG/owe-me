<script lang="ts">
  import UserAuthForm from "../(components)/user-auth-form.svelte";
</script>

<main>
  <h1>Login Page</h1>
  <UserAuthForm />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
</style>
