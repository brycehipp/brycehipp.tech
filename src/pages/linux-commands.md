Find (and delete) files with a certain extension

```shell
find . -name '*.__PROPS' -type f -delete

```

---

Unzip all zips in subdirectories preserving folder structure

https://stackoverflow.com/a/2318189

```shell
find . -name "*.zip" | xargs -P 10 -I fileName sh -c 'unzip -o -d "$(dirname "fileName")/$(basename -s .zip "fileName")" "fileName"'
```

---

Find all files with a name and copy them to another folder with a random name

```shell
find . -name 'request.log' -type f | xargs -P 10 -I {} sh -c 'cp {} "./logs/request.$(jot -r 1  2000 65000).log"' \;
```

---

Remove lines that don't contain `/api/index.cfm/v1/search`

```shell
find ./logs -name 'request.*.log' -type f | xargs -P 10 -I {} sh -c "LC_ALL=C sed -i '' '/\/api\/index.cfm\/v1\/search/\!d' {}" \;
```

We need `LC_ALL=C` otherwise we get `sed: RE error: illegal byte sequence` on macOS - https://stackoverflow.com/questions/19242275/re-error-illegal-byte-sequence-on-mac-os-x

This will run across 10 processes because of `-P 10`

---
Remove lines that don't contain `COMPLETED`

```shell
find ./logs -name 'request.*.log' -type f | xargs -P 10 -I {} sh -c "LC_ALL=C sed -i '' '/COMPLETED/\!d' {}" \;
```

---

Combine all the cleaned logs into one file

```shell
find ./logs -type f -name 'request.*.log' -exec cat {} + >> request.log
```

---

Import data

```sql
drop table if exists requests;
create table if not exists requests (
   date date
  ,time time
  ,datetime_ms bigint
  ,version varchar(500)
  ,srv_start_ts bigint
  ,id int
  ,status varchar(500)
  ,cp_reason varchar(500)
  ,thread_id varchar(500)
  ,client_ip varchar(500)
  ,method varchar(500)
  ,url varchar(500)
  ,execution_time_ms bigint
  ,used_memory_pct int
  ,max_memory_kb int
  ,used_memory_kb int
  ,total_memory_kb int
  ,free_memory_kb int
  ,query_string varchar(500)
  ,status_code int
  ,cpu_time_ms bigint
  ,amf_request varchar(500)
  ,jsession_id varchar(500)
  ,cf_id varchar(500)
  ,cf_token varchar(500)
  ,jdbc_query_count int
  ,jdbc_total_timems int
  ,jdbc_total_db_time_ms bigint
  ,jdbc_total_rows int
  ,bytes_sent bigint
  ,tt_first_byte_ms int
  ,tt_last_byte_ms int
  ,tt_stream_open_ms int
  ,tt_stream_close_ms int
  ,user_agent_string varchar(500)
) engine = InnoDb;


load data infile
  '/Users/bryce/temp/fr/request.log'
into table
  requests
fields terminated by
  ' '
lines terminated by
  '\n';

```
