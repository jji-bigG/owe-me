<script lang="ts">
  import UserAuthForm from "./(components)/user-auth-form.svelte";
  import { Button } from "$lib/components/ui/button";
</script>

<div
  class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
  <Button
    href="/auth/login"
    variant="ghost"
    class="absolute right-4 top-4 md:right-8 md:top-8"
  >
    Login
  </Button>
  <div
    class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r"
  >
    <!-- Gradient overlay to create shadow -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"
    ></div>
    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover"
      style="background-image: url(/nathan-dumlao-QvM7SCMFtVc-unsplash.jpg); z-index: 5;"
    ></div>

    <!-- Text content -->
    <div class="relative z-20 flex items-center text-lg font-medium">
      Owe Me
    </div>
    <div class="relative z-20 mt-auto">
      <blockquote class="space-y-2">
        <p class="text-lg">
          &ldquo;Helping me keep track of those who don't pay me back and apply
          an interest on them! Jokes aside, but this project is a self hosted
          solution that helps you keep track of your personal finances and
          loans.&rdquo;
        </p>
        <footer class="text-sm">Jerry Ji</footer>
      </blockquote>
    </div>
  </div>

  <div class="lg:p-8">
    <div
      class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
    >
      <div class="flex flex-col space-y-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p class="text-muted-foreground text-sm">
          Enter your email below to create your account. If exists, password
          will be validated for sign in.
        </p>
      </div>
      <UserAuthForm />
      <p class="text-muted-foreground px-8 text-center text-sm">
        By clicking continue, you agree to our
        <a
          href="/terms"
          class="hover:text-primary underline underline-offset-4"
        >
          Terms of Service
        </a>
        and
        <a
          href="/privacy"
          class="hover:text-primary underline underline-offset-4"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  </div>
</div>
