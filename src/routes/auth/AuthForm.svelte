<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { cn } from "$lib/utils.js";
  import { Github, LoaderCircle } from "lucide-svelte";

  let className: string | undefined | null = undefined;
  export { className as class };

  let isLoading = false;
</script>

<div class={cn("grid gap-6", className)} {...$$restProps}>
  <form action="/auth" method="post">
    <div class="grid gap-2">
      <div class="grid gap-1">
        <Label class="sr-only" for="username">Username</Label>
        <Input
          id="username"
          name="username"
          placeholder="用户名"
          type="text"
          autocapitalize="none"
          autocomplete="username"
          autocorrect="off"
          disabled={isLoading}
        />
      </div>
      <div class="grid gap-1">
        <Label class="sr-only" for="email">Password</Label>
        <Input
          id="password"
          name="password"
          placeholder="6-20 characters"
          type="password"
          autocapitalize="none"
          autocomplete="password"
          autocorrect="off"
          disabled={isLoading}
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {#if isLoading}
          <LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
        {/if}
        Sign In with Email
      </Button>
    </div>
  </form>
  <div class="relative">
    <div class="absolute inset-0 flex items-center">
      <span class="w-full border-t" />
    </div>
    <div class="relative flex justify-center text-xs uppercase">
      <span class="bg-background text-muted-foreground px-2">
        Or continue with
      </span>
    </div>
  </div>
  <Button variant="outline" type="button" disabled={isLoading}>
    {#if isLoading}
      <LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
    {:else}
      <Github class="mr-2 h-4 w-4" />
    {/if}
    GitHub
  </Button>
</div>
