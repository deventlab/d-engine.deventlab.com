// Source: d-engine benches/reports/v0.2.5/bench_report_v0.2.5.md, Section 2, Embedded table.
// AWS us-east-1, 3 x c5.2xlarge, gp3. d-engine uses the optional raft-engine log store
// (experimental, not the v0.2.5 default). etcd v3.7.2 ran on the same instance shape.
export interface Row {
  label: string;
  etcd: number;
  dengine: number;
}

export const embedded: Row[] = [
  { label: "Write, 1 in flight", etcd: 605, dengine: 836 },
  { label: "Write, 100 in flight", etcd: 10064, dengine: 19860 },
  { label: "Linearizable read", etcd: 64071, dengine: 368068 },
  { label: "Eventual read (etcd: serializable)", etcd: 148709, dengine: 1253650 },
];
