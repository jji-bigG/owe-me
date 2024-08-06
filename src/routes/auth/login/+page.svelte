<script lang="ts">
  import UserAuthForm from "../(components)/user-auth-form.svelte";
</script>

<main>
  <div
    class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
  >
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Log In</h1>
      <UserAuthForm />
    </div>
  </div>
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
