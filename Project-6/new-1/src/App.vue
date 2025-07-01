<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="childcomponent">This is a Child Component</RouterLink>
    <RouterLink to="parentcomponent">This is a Parent Compnent</RouterLink>
    <RouterLink to="blogpost" title="My name is dddd">This is a Blog Post</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
