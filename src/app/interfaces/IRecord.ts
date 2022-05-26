export interface Record {
    id:            string;
    id_petition:   string;
    returned_data: string;
    updatedAt:     Date;
    Petition:      Petition;
}

export interface Petition {
    date:   Date;
    method: string;
    url:    string;
}

export interface RecordTableProps {
    records:   Record[];
    handleRecords: () => void
}