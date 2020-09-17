const Header = () => {
	const template = `
    <nav class="demo">
    <a href="#" class="brand">
        <img class="logo" src="/logo-2.5da84a94.svg" />
        <span style="margin-left: 0.6rem">webdevworld</span>
    </a>

    <!-- responsive-->
    <input id="bmenub" type="checkbox" class="show" />
    <label for="bmenub" class="burger pseudo button"><i class="fas fa-hamburger fa-2x"></i></label>

    <div class="menu">
        <a href="https://ctwbt.com" class="button darkblue">about me</a>
        <a href="https://ctwbt.com" class="button lightblue">Blogs</a>
        <a href="https://ctwbt.com" class="button darkblue">contact</a>
    </div>
</nav>
    `;
	return template;
};

export default Header;
