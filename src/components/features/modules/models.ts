export default interface Feature {
  id: number;
  name: string;
  label: string;
  props: [];
}

export interface FeatureStack extends Feature {
  uniqId: string;
}
