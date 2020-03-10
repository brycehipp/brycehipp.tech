# Pi-hole Info

## Blocklist

https://discourse.pi-hole.net/t/update-the-best-blocking-lists-for-the-pi-hole-alternative-dns-servers-2019/13620

## Whitelist

https://github.com/anudeepND/whitelist

## Commands

### Update

`pihole -up`

Combine into a system update command.

```bash
alias update_system='sudo apt-get update -y && sudo apt-get dist-upgrade -y && sudo apt-get upgrade -y && sudo apt-get autoremove -y && sudo apt-get autoclean -y && pihole -up'
```

Reload with new alias
```bash
. ~/.bashrc
```

## More Info

https://firebog.net/
